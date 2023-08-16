import '../style/tag.css';

function Tag({tags}) {
  return (
    <div className='tag_container'>
        {tags.map((tag, index) => (
            <div key={`${tag.id}-${index}`}>
                <p className='tag'>{tag}</p>
            </div>
        ))}
    </div>
  )
}

export default Tag