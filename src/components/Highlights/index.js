import logo from "public/assets/paqueta-outlet.png";
import styles from "./styles.module.scss";
import Image from "next/image";
import { Card } from "./Card";

export const Highlights = () => {
    return (
        <section className={styles.highlights}>
            <div className={styles.warrapHeader}>
                <div className={styles.header}>
                    <Image
                        src={logo}
                        width="auto"
                        height="auto"
                        quality={100}
                        alt="logo da empresa paqueta"
                    />
                    <h2>
                        Você também pode escolher o seu novo sapato
                        <br />
                        favorito de acordo com a sua numeração.
                    </h2>
                </div>

                <div className={styles.containerNumbers}>
                    <button>33</button>
                    <button>34</button>
                    <button>35</button>
                    <button>36</button>
                    <button>37</button>
                    <button>38</button>
                    <button>39</button>
                    <button>40</button>
                    <button>41</button>
                    <button>42</button>
                    <button>43</button>
                    <button>44</button>
                </div>
            </div>

            <div className={styles.containerCards}>
                <div className={styles.headerCards}>
                    <h2>DESTAQUE</h2>
                    <button>CONFERIR TUDO</button>
                </div>
                <div>
                    {/* <Card
                        img={imagemTeste}
                        description="SCARPIN VIZZANO VERDE SALTO ALTO"
                        soldOff={true}
                        value={149.99}
                    /> */}
                </div>
            </div>
        </section>
    );
};
