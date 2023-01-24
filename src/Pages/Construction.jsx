import ConstructionImage from '../assets/Construction.png';

const Construction = () => {
  console.log('Construction');
  return (
    <div className="section" id="construction">
      <img width="60%" src={ConstructionImage} alt="Under Construction" />
      <h1>This page is currently under construction</h1>
    </div>
  );
};

export default Construction;
