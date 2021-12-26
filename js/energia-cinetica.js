var html =
`
<h2>Energía cinética</h2>
<section class="teorema">
    <p>
        El teorema de la energía cinética establece que 
        <span class="cursive">el trabajo realizado por la fuerza neta (suma de todas las fuerzas) aplicada a 
        una partícula es igual al cambio que experimenta la energía cinética de dicha partícula.</span>
    </p>
    <p>
        Depende del movimiento del cuerpo
    </p>    
</section>

<section class="demo">
    <div> 
        <h5>
            Demostración
        </h5>
        <p>
            Considerar un cuerpo de masa \\(m\\) que se desplaza por la aplicación de una fuerza neta constante \\(F\\) 
            una distancia \\(s\\) desde \\(s_1\\) con una velocidad \\(v_1\\) hasta una posición \\(s_2\\) con velocidad \\(v_2\\) 
            y siendo \\(s_2>s_1\\) 
        </p>
        <p>
            El trabajo realizado se expresa como:
            $$\\int_{s_1}^{s_2}\\,dW=\\int_{s_1}^{s_2} F \\,ds$$
        </p>
        <p>
            Por mecánica de Newton
            $$W_{1\\rightarrow2}=\\int_{s_1}^{s_2} m \\cdot a \\,ds$$
        </p> 
        <p>
            $$W_{1\\rightarrow2}= m \\int_{s_1}^{s_2} \\frac{\\,dv}{\\,dt} \\,ds$$
        </p>            
        <p>
            La expresión \\(\\frac{\\,ds}{\\,dt}\\) da cuenta de la velocidad infinitesimal de desplazamiento del cuerpo:
            $$W_{1\\rightarrow2}= m \\int_{v_1}^{v_2} v \\,dv$$
        </p>
        <p>
            $$W_{1\\rightarrow2}= m \\tfrac{v^2}{2} \\Big|_{v_1}^{v_2}$$
        </p>
        <p>
            $$W_{1\\rightarrow2}= \\frac{1}{2} m (v_2^2 - v_1^2)$$
        </p>
        <p>
            Sea 
            <span class="box-equation">\\(K=\\frac{1}{2} m v_i^2\\)</span> 
            la manifestación no vectorial de la 2° ley de Newton, 
            se define al cambio de energía cinética como:

            $$W_{1\\rightarrow2} = K_2 - K_1 = \\Delta K$$
        </p>
    </div>
</section>

<section class="casos">
    <div>
        <h6>
            Cambio nulo de velocidad entre posiciones
        </h6>
        <p>
            Si no hubiera cambio de velocidad entre las posiciones \\(x_1\\) y \\(x_2\\) entonces \\(\\Delta K=0\\)     
            y por ende \\(W_{1\\rightarrow2}=0\\)
        </p>
    </div>

    <div>
        <h6>
            Fuerza neta variable
        </h6>
        <p>
            Si la fuerza neta no fuera constante, como es el caso de la fuerza elástica en un resorte,
            se aproxima a intervalos de desplazamiento a los que aplico una fuerza constante,
            obteniendo como resultado la misma expresión.
        </p>
        <p>
            $$\\int_{s_1}^{s_2}\\,dW=\\int_{s_1}^{s_2} F_{x} \\,ds$$
        </p>
        <p>
            $$W_{1\\rightarrow2}=\\int_{l_1}^{l_2} k \\cdot l \\,dl$$
        </p>   
        <p>
            $$W_{1\\rightarrow2}= k \\tfrac{l^2}{2} \\Big|_{l_1}^{l_2}$$
        </p>   
        <p>
            $$W_{1\\rightarrow2}= \\frac{1}{2} k (l_2^2 - l_1^2)$$
        </p>
    </div>

    <div>
        <h6>
            Trayectorias curvas
        </h6>
        <p>
            Generalización cuando la fuerza varia en magnitud y dirección:
            $$\\int_{P_1}^{P_2}\\,dW = \\int_{P_1}^{P_2} F cos(\\theta) \\,dl$$
        </p>
        <p>
            Considerando que la descripción de la fuerza la hace paralela a 
            los desplazamientos infinitesimales \(,dl\)
            $$W_{1\rightarrow2} = \\int_{P_1}^{P_2} F_{\\parallel} \\,dl$$
        </p>
        <p>
            Luego considerando que un movimiento circular uniforme
            $$F = (m \\cdot a_{\\parallel}) \\hat{t} + (m \\cdot a_{\\perp}) \\hat{n}$$ 
            donde el segundo término no realiza trabajo
        </p>
        <p>
            $$W_{1\\rightarrow2} = m \\int_{P_1}^{P_2} a_{\\parallel} \\,dl$$
        </p>
        <p>
            Efectuo un cambio de variable:
            $$W_{1\\rightarrow2} = m \\int_{P_1}^{P_2} \\frac{\\,dv}{\\,dt} \\,dl$$
            $$W_{1\\rightarrow2} = m \\int_{P_1}^{P_2} v \\,dv$$
        </p>
        <p>
            Efectuando la integral de línea se obtiene el mismo resultado en general:
            $$W_{1\\rightarrow2} = \\frac{1}{2} m (v_2^2 - v_1^2)_{\\parallel}$$
        </p>
    </div>
</section>
`;

var x = document.getElementById("energia-cinetica").innerHTML+=html;