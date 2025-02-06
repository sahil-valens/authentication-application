const Button = ({ providerLogo, providerName, onProviderSelect }) => {

    return (
        <button className="custom-button" onClick={onProviderSelect}>
            <img className="logo" src={providerLogo} alt="logo" />
            <span className="button-text">{providerName}</span>
        </button>
    );
};

export default function Footer() {

    function onProviderSelect() {
        window.alert("hello!")
    }

    return (
        <footer>
            <Button providerLogo="src/assets/placeholders/microsoft.png" providerName="microsoft" onProviderSelect={onProviderSelect}/>
            <Button providerLogo="src/assets/placeholders/github.png" providerName="github" onProviderSelect={onProviderSelect}/>
            <Button providerLogo="src/assets/placeholders/google.png" providerName="google" onProviderSelect={onProviderSelect}/>
        </footer>
    )
};
