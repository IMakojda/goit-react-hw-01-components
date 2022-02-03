
const Navigation = ({links}) => {
 return links.map(({href}) => (
        <div key={href}>
            <a href={href}>{href}</a>   
        </div>
     ))
    
}

export default Navigation;