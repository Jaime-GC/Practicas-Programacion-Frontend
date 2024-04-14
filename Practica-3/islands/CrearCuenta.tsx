import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";

const CrearCuenta: FunctionComponent = () => {
    return (
        <div>
            <form action="/crearCuentaR" method="get" className="form">
                <h1>Crear Cuenta</h1>

                <label>
                    Usuario 
                    <input type="text" name="name" />
                </label>

                <label>
                    Contraseña: 
                    <input type="password" name="password" />
                </label>

                <label>
                    Sexo: 
                    <select name="sex">
                        <option value="">Todos</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                    </select>
                </label>

                <label>
                    Edad: 
                    <input type="number" name="age" min="0" />
                </label>

                <label>
                    Descripción: 
                    <textarea name="description"></textarea>
                </label>

                <label>
                    Hobbies: 
                    <input type="text" name="hobbies" />
                </label>

                <label>
                    Foto: 
                    <input type="text" name="photo" />
                </label>

                <label>
                    Comentarios: 
                    <input type="text" name="comments" />
                </label>

                <button class="button1" type="submit" >Crear Cuenta</button>
            </form>
        </div>
    );
};

export default CrearCuenta;
