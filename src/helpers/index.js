// fn que genera numero aleatorio que puede ser tomado para id 
export const generateId = () =>{
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
}

//Formatea fecha 
export const formatearFecha = fecha =>{
    const fechaNueva = new Date(fecha); //instanciamos la fecha como nueva fecha
    //opciondes de la fecha nueva
    const opciones = {
        year : 'numeric',
        month : 'long',
        day : '2-digit'
    }

    //retorna fecha con las opciones
    return fechaNueva.toLocaleDateString('es-Es',opciones);
}

export const generateDate =()=>{
    const date = new Date();
    const datefull = date.getDate() + "/" + (date.getMonth() +1) + "/" + date.getFullYear();

    return datefull;
}