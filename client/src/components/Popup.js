import '../css/Popup.css'

const Popup = ({ content, open, onClose }) => {
    if (!open) return null

    return (
        <>
            <div className="popup-overlay" />
            <div className="popup">
                <img className="popup-img" src={content.url} alt={content.name} />
                <div className="popup-details">
                    <div className="popup-details-name">{content.name}</div>
                    <div className="popup-details-id">ID: {content.id}</div>
                    <div className="popup-details-desc">{content.desc}</div>
                </div>
                <button onClick={onClose} className="popup-close-btn">&#10006;</button>
            </div>
        </>
    )
}

export default Popup
