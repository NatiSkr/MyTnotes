var html =
`
<h2>
    Energía mecánica y conservación
</h2>
<section class="teorema">
    <p>
    <span class="cursive">
        Se define la energía mecánica como la sumatoria de energía potencial y cinética \\(E=K+U\\) de un cuerpo o sistema físico.
    </span>
    </p>    
</section>

<section class="casos">
    <div>
        <h6>Fuerzas conservativas de la energía mecánica</h6>
        <p>$$E=cte$$</p>
        <p>Son capaces de convertir bidireccionalmente entre energía potencial y energía cinética</p>
        <p class="box-equation">Gravitacionales (peso)</p>
        <p class="box-equation">Elástica</p>
    </div>

    <div>
        <h6>Propiedades del trabajo realizado por fuerzas conservativas</h6>
        <p>En una trayectoria cerrada donde se vuelve al estado inicial el trabajo total será nulo</p>
        <p>Es independiente de la trayectoria del cuerpo, solo depende de los estados inicial y final</p>
        <p>Es reversible</p>
        <p>$$W_{otras} = 0$$</p>
    </div>

    <div>
        <h6>Fuerzas no conservativas de la energía mecánica</h6>
        <p>Disipan la energía</p>
        <p>No permiten procesos reversibles</p>
        <p class="box-equation">Rozamiento o fricción</p>
        <p>Sus efectos se representan en términos de <span class="box-equation">energía interna</span></p>
        <p>$$W_{otras} > 0 \\Rightarrow E \\uparrow$$</p>
        <p>$$W_{otras} < 0 \\Rightarrow E \\uparrow $$</p>
    </div>

    <div>
        <h5>Potencial \\(\\phi\\) de una fuerza conservativa</h5>
        <p>
            $$F = - \\frac{\\,d\\phi}{\\,dx} \\hat{x}$$
        </p>
        <p>
            $$\\phi = -\\int F \\,dx$$
        </p>
        <p>
            Al integrarlo obtengo que
            $$\\phi + C = -\\int F \\,dx$$
        </p>
        <p>
            Sumarle al potencial una constante dada por la integración, 
            me da la misma fuerza. Entonces hay infinitos potenciales.
        </p>
        <p>
            Se dice que \\(x_{eq}\\) es un punto de equilibrio si 
            la razón \\(\\frac{\\,d\\phi}{\\,dx}\\) es nula.
        </p>
        <p>
            Si el cuadrado de la misma expresión fuera mayor a cero
            hablamos de un equilibrio estable, pero si fuera negativa
            decimos que en ese punto hay un equlibrio inestable.
        </p>
    </div>
</section>
`;

var x = document.getElementById("energia-mecanica-conservacion").innerHTML+=html;