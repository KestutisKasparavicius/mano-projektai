import PropTypes from 'prop-types'

function Image({image,classElem}) {
    return (
    <img src={image} alt="image" className={classElem}/>
    )
}



Image.propTypes = {
    image: String,
    classElem: String
}
export default Image



