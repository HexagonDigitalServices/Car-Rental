{
  /* Testimonial Cards */
}

const shape = styles.cardShapes[index % styles.cardShapes.length];
const IconComponent = styles.icons[index % styles.icons.length];

<div
  key={t.id}
  className={styles.card}
  style={{
    clipPath: "polygon(0% 10%, 10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)",
    background:
      "linear-gradient(145deg, rgba(30,30,40,0.8), rgba(20,20,30,0.8))",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(100,100,120,0.2)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  }}
></div>