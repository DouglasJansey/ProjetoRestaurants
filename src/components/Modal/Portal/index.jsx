import  ReactDOM  from "react-dom";
//Renderizando outra div sem ser o root

const PortalModal = ({children}) => {
    const portal = document.getElementById('modal-root')
   return ReactDOM.createPortal(children, portal)
};

export default PortalModal;