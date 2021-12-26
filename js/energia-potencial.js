var html =
`
<h2>Energía potencial</h2>
<section class="teorema">
    <p>
        Depende del tipo de interacción que se ejerce sobre el cuerpo (potencial, elástica)
    </p>
</section>

<section class="demo">
    <div>
        <h6>Energía potencial gravitacional</h6>
        <p>
            Considerar un cuerpo que cae verticalmente debido solamente al efecto de su peso 
            desde \\(y_1\\) hasta \\(y_2\\)
        </p>
        <p>
            $$\\int_{y_1}^{y_2}\\,dW = \\int_{y_1}^{y_2} P \\,dy$$
        </p>
        <p>
            Recordar que en general decimos que el vector unitario de la fuerza apunta hacia abajo
        </p>
        <p>
            $$W_{1\\rightarrow2}^{grav} = \\int_{y_1}^{y_2} - m \\cdot g \\,dy$$
        </p> 
        <p>
            $$W_{1\\rightarrow2}^{grav} = - \\int_{y_2}^{y_1} m \\cdot g \\,dy$$
        </p>
        <p>
            $$W_{1\\rightarrow2}^{grav} = - m \\cdot g (y_1 - y_2)$$
        </p>
        <p>
            $$W_{1\\rightarrow2}^{grav} =  - m \\cdot g \\cdot y_1 + m \\cdot g \\cdot y_2$$
        </p>
        <p>
            Se define a la energía potencial gravitacional 
            <span class="box-equation">\\(U_{grav}=m \\cdot g \\cdot y_i\\)</span> 
            como una manifestación no vectorial de la 2° ley de Newton
        </p>
        <p>
            Si lo expresamos por el cambio desde un estado inicial a un estado final:
        </p>
        <p>
            $$W_{1\\rightarrow2}^{grav} =  - (m \\cdot g \\cdot y_2 - m \\cdot g \\cdot y_1)$$
        </p>
        <p>
            $$W_{1\\rightarrow2}^{grav} =  - ( U_2^{grav} - U_1^{grav})$$
        </p>
        <p>
            $$W_{1\\rightarrow2}^{grav} =  - \\Delta U^{grav}$$
        </p>
    </div>
</section>

<section class="casos">
    <div>
        <h6>
            El signo de la variación de energía potencial
        </h6>
        <p>
            Descenso: 
            Si \\(y_2 < y_1\\) entonces \\(\\Delta U_{grav} < 0\\) por lo que 
            el peso realiza trabajo positivo \\(W_{1\\rightarrow2}^{grav} = (+)\\)
        </p>
        <p>
            Ascenso: 
            Si \\(y_2 > y_1\\) entonces \\(\Delta U_{grav} > 0\\) por lo que 
            el peso realiza trabajo negativo \\(W_{1\\rightarrow2}^{grav} = (-)\\)
        </p>
        <p>
            Si el cuerpo mantiene su altura respecto de la referencia, tiene energía potencial gravitatoria pero esta no varía.
        </p>
    </div>

    <div>
        <h6>
            Energía potencial elástica
        </h6>
        <p>
            Al realizar trabajo se almacena energía en un cuerpo deformable
            que recupera forma y tamaño luego de deformarse y liberar energía
            (cinética K)
        </p>
        <p>
            Suponer un cuerpo enlazado a un resorte que inicialmente se encuentra 
            en una posición \\(x_1\\) tal que luego de realizar un trabajo se encuentre
            en una posición \\(x_2\\). <a href="#trabajo-elastica">Hemos visto</a> que:
            $$W_{1\\rightarrow2}= \\frac{1}{2} k (x_2^2 - x_1^2)$$
        </p>
        <p>
            Si la fuerza elástica es la única que realiza trabajo entonces 
            con lo visto y con el teorema de trabajo-energía
            $$W = U_1^{el} - U_2^{el} = -\\Delta U^{el} = K_2 - K_1$$
        </p>
        <p>
            De forma tal que \\(K1 + U_1^{el} = K2 + U_2^{el}\\)
        </p>
        <p>
            Entonces la energía mecánica total se conserva
        </p>
    </div>

    <div>
        <h6>Fuerza en una dimensión a partir de la energia potencial</h6>
        <p>
            Considerar un cuerpo al que se le aplica una fuerza y realiza trabajo
        </p>
        <p>
            $$W = - \\Delta U$$
        </p>
        <p>
            y se desplaza una pequeña distancia \\(\\Delta x\\)
        </p>
        <p>
            $$F_x(x) \\cdot \\Delta x = - \\Delta U$$
        </p>
        <p>
            $$F_x(x) = - \\frac{\\Delta U}{\\Delta x}$$ 
        </p>
    </div>
</section>
`;

var x = document.getElementById("energia-potencial").innerHTML+=html;