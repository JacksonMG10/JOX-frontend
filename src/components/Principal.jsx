import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Principal.css';

function Introduccion() {
    const navigate = useNavigate();

    return (
        <main className="introduccion">
            <section className="introduccion-contenido">

                <div className="logo">
                    JOX
                </div>

                <h1>
                    Gestión de <span>Mantenimiento</span>
                </h1>

                <p>
                    Administra tus vehículos, consulta información,
                    aprende sobre mantenimiento y forma parte de nuestra comunidad.
                </p>

                <div className="botones">
                    <button
                        className="btn btn-principal"
                        onClick={() => navigate('/login')}
                    >
                        Iniciar sesión
                    </button>

                    <button
                        className="btn btn-secundario"
                        onClick={() => navigate('/registro')}
                    >
                        Crear cuenta
                    </button>
                </div>

            </section>
        </main>
    );
}

export default Introduccion;