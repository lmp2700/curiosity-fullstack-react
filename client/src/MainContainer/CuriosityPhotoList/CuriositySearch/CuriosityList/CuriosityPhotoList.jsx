import React, { Component } from 'react'

class CuriositySearch extends Component {
    render() {
        const curiositySearch = this.props.curiositySearch.map((curiosityResults, id) => {
            return <div className="info" key={curiosityResults.id}>
                <br />
                <img width={450} height={400} src={curiosityResults.img_src} alt={curiosityResults.earth_date} />
            </div>
        })
        return (
            <div>
                {curiositySearch}
            </div>
        )
    }
}

// console.log(curiosityResults, ' these are search results')

export default CuriositySearch;