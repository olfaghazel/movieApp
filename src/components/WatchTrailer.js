

const WatchTrailer=({title,description,trailer})=>{

    return(
        <>
            <h2 style={{padding:'20px'}}>{title}</h2>
            <p style={{paddingButton:'20px',paddingLeft:"20px", paddingRight:'20px'}}>{description}</p>
            <iframe style={{padding:'20px'}} width="1349" height="488" src={trailer} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </>
    );
}
export default WatchTrailer;