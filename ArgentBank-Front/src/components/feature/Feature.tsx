import './feature.css';

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

function Feature(props:FeaturesProps) {
  return (
    <>
        <div className='feature-block'>
            <img src={props.icon} className='icon-feature'/>
            <h3 className='title-feature'>{props.title}</h3>
            <p className='paragraph-feature'>{props.description}</p>
        </div>
    </>
  )
}

export default Feature