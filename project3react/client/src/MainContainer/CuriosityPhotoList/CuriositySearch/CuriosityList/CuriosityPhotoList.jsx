import React, {Component} from 'react'

console.log('curiosity search first')

class CuriositySearch extends Component {
    constructor(){
        super();
    }   
    render(){
    console.log('curiosity search 2')
      const curiositySearch = this.props.curiositySearch.map((curiosityResults, id) => {
        return  <div className="info" key={curiosityResults.id}>
                        <br/>
                        <img width={450} height={400} src={curiosityResults.img_src} alt={curiosityResults.earth_date} />
                </div>
    })
    console.log('curiosity search 3')
    
    return (
        <div>
            {curiositySearch}
        </div>
            )   
    }
}

// console.log(curiosityResults, ' these are search results')
console.log('curiosity search last')

export default CuriositySearch;