

const WhatsappButton = () => {
  const phoneNumber = "5599999999999"; // substitua pelo seu número com DDD, ex: 5511999999999
  const message = "Adorei seu artigo";
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <a
      href={whatsappLink}
      style={{
        position: "fixed",
        width: "60px",
        height: "60px",
        bottom: "40px",
        right: "40px",
        backgroundColor: "#25d366",
        color: "#FFF",
        borderRadius: "50px",
        textAlign: "center",
        fontSize: "30px",
        boxShadow: "1px 1px 2px #888",
        zIndex: 1000,
        textDecoration: "none",
      }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fa fa-whatsapp" style={{ marginTop: "16px" }}></i>
    </a>
  );
};

export default WhatsappButton;
