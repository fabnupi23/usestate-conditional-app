import React, { useState } from 'react'

function ConditionalApp() {
    const [condition, setCondition] = useState(true);
  return (
    <div>
        <button onClick={() => setCondition(!condition)}>
            Random
        </button>
        {
            condition
            ? <h1>Mostrar mensaje en verdadero</h1>
            : <h1>Otro mensaje en falso</h1>
        }

        <h1>Valor del estado es {condition.toString()}</h1>

    </div>
  )
}

export { ConditionalApp };