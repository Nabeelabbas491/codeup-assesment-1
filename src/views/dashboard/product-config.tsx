
const ProductConfigurations = () => {

    const colors = ['rgba(0, 0, 0, 1)', 'rgba(159, 136, 167, 1)', 'rgba(248, 231, 182, 1)', 'rgba(213, 216, 216, 1)', 'rgba(124, 125, 125, 1)']

    return (
        <div className="configurations">
           <div className="label">Condition: Good</div>
           <div className="chips-container">
              <span className="chip border-red">Good</span>
              <span className="chip">Great</span>
              <span className="chip">Pristine</span>
           </div>
           <div className="label mt-4">Capacity: 128GB</div>
           <div className="chips-container">
              <span className="chip border-red">128GB</span>
              <span className="chip">256GB</span>
              <span className="chip">512GB</span>
           </div>
           <div className="label mt-4">Color: Space Black</div>
           <div className="circles flex">
                {colors.map((color:string, index) => {
                    return <span className={`circle-container ${index == 0 && 'selected'}`} key={color}>
                    <span className="item" style={{ background : `${color}` }}></span>
                 </span>
                })}
           </div>
        </div>
    );
}
  
export default ProductConfigurations;
  