var html =
`
<h2>Trabajo</h2>
    <section class="teorema">
        <p>
            El trabajo \\(W\\) realizado por una fuerza \\(\\overrightarrow{F}\\) aplicada a una partícula con un ángulo 
            \\(\\theta\\) respecto de la dirección es igual al producto
            de la magnitud de la componente de la fuerza correspondiente al sentido del 
            desplazamiento por la magnitud de dicho desplazamiento \\(\\overrightarrow{s}\\)
        </p>
        <p>
            $$W = F cos(\\theta) \\cdot s$$
        </p>
        <p>
            Implicación directa del producto entre vectores: \\(W\\) es un escalar
        </p>   
        <br>
        <p>
        <span class="box-units">
            Unidades: joule (J) en S.I. tal que \\(1J = kg \\cdot m^2 / s^2 = 10^7 ergios\\)
        </span>
        </p>
    </section>

    <section class="casos">
        <div>
        <h6>Caso límite: fuerza perpendicular</h6>
        <p>
            Si se aplica una fuerza constante de forma tal que su dirección sea perpendicular 
            al desplazamiento (\\(\\theta=90°\\)) el trabajo será nulo
        </p>
        </div>

        <div id="trabajo-elastica">
        <h6>Trabajo al aplicar una fuerza variable: elástica</h6>
        <p>
            $$\\int_{x_1}^{x_2}\\,dW=\\int_{x_1}^{x_2} F_{x} \\,dx$$
        </p>
        <p>
            $$W_{1\\rightarrow2}=\\int_{x_1}^{x_2} k \\cdot x_i \\,dx$$
        </p>   
        <p>
            $$W_{1\\rightarrow2}= k \\tfrac{x^2}{2} \\Big|_{x_1}^{x_2}$$
        </p>   
        <p>
            $$W_{1\\rightarrow2}= \\frac{1}{2} k (x_2^2 - x_1^2)$$
        </p>
        </div>

        <div>
        <h6>Potencia</h6>
        <p>Expresa la rapidez con la que se efectua el trabajo</p>
        <p>
            $$P_{med} = \\frac{\\Delta W}{\\Delta t}$$
        </p>
        <p>
            $$P_{inst} = \\lim_{\\Delta t\\to 0} \\frac{\\Delta W}{\\Delta t}$$
        </p>
        <p class="box-units">
            Unidades: watt (W) en S.I. tal que \\(1w = 1 J s^{-1}\\)
        </p>
        <p>
            Se puede expresar en términos de velocidad mediante la expresión del trabajo
        </p>
        </div>
    </section>
`;

var x = document.getElementById("trabajo").innerHTML+=html;