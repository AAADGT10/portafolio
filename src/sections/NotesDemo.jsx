import { useState, useEffect } from "react";
const STORAGE_KEY = "porfafolio_notes_v1";


export default function NotesDemo() {
  // 1) notes: aquí guardaremos todas las notas (un array)
  // empieza vacío porque al iniciar no hay notas
  const [notes, setNotes] = useState(() => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    } catch{
        return [];
    }
  });

  const [editingId, setEditingId] = useState(null);

  // 2) text: lo que el usuario escribe en el input
  const [text, setText] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
  }, [notes]);

  // 3) Esta función se ejecuta cuando damos click en "Agregar"
  const addNote = () => {
    // quitamos espacios al inicio/final para evitar notas "vacías"
    const value = text.trim();

    // si está vacío, no hacemos nada
    if (!value) return;

    // creamos un objeto nota (cada nota tendrá id y title)
    const newNote = { id: crypto.randomUUID(), title: value, done: false};

    // actualizamos el estado:
    // prev = notas anteriores
    // ponemos la nueva nota al inicio del array
    setNotes((prev) => [newNote, ...prev]);

    // limpiamos el input
    setText("");
  };

  const deleteNote = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const toggleDone = (id) => {
    setNotes((prev) => 
    prev.map((note) => 
    note.id === id ? { ...note, done: !note.done } : note ))
  }

  const startEdit = (note) => {
    setText(note.title);
    setEditingId(note.id);
  };

  const saveEdit = () => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === editingId ? { ...note, title: text } : note,
      ),
    );
    setText("");
    setEditingId(null);
  };
//Commit nuevo
  return (
    <section className="section" id="demo">
      <div className="container">
        <h2 className="section__title">App de notas</h2>
        <p className="section__subtitle muted">Demo de CRUD</p>

        <div className="notes card">
          <h3 className="notes__title">Mis notas</h3>

          {/* Input controlado: value viene del estado, onChange actualiza el estado */}
          <div className="notes__form">
            <input type="text" className="input" placeholder="Nueva nota..." value={text} onChange={(e) => setText(e.target.value)}/>
            <button className="btn btn--primary" onClick={editingId ? saveEdit : addNote} > {editingId ? "Actualizar" : "Agregar"} </button>
          </div>

          {/* Mostrar notas */}
          <div className="notes__list">
            {notes.length === 0 ? (
              <p className="muted">Aún no tienes notas. Agrega la primera 👇</p>
            ) : (
              notes.map((note) => (
                <div key={note.id} className={`note ${note.done ? "note--done" : ""}`}>
                    <button className="note__check" aria-label="Marcar" onClick={() => toggleDone(note.id)}/>
                    <p className="note__text">{note.title}</p>

                    <div className="note__actions">
                        <button className="btn btn--ghost btn--small" onClick={() => startEdit(note)}>Editar</button>
                        <button className="btn btn--ghost btn--small" onClick={() => deleteNote(note.id)}>Borrar</button>
                    </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
