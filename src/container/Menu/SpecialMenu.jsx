import { images, data } from '../../constants';
import { MenuItem, SubHeading } from '../../components';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <section className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu that fits you palatte" />
      <h1 className="headtext__cormorant">Today&apos;s Speical</h1>
    </div>

    <div className="app__specialMenu-menu">

      {/* col1 */}
      <div className="app__specialMenu-menu_juices flex__center">
        <p className="app__specialMenu_menu_heading">Juices & Soft-drinks</p>
        <div className="app__specialMenu_menu_items">
          {data.juices.map((juice, index) => (
            <MenuItem key={juice.title + index} title={juice.title} price={juice.price} tags={juice.tags} />
          ))}
        </div>
      </div>

      {/* image */}
      <div className="app__specialMenu-menu_img">
        <img src={images.menu2} alt="menu img" />
      </div>

      {/* col2 */}
      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className="app__specialMenu_menu_heading">Cocktails</p>
        <div className="app__specialMenu_menu_items">
          {data.cocktails.map((cocktail, index) => (
            <MenuItem key={cocktail.title + index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: '15px' }}>
      <button type='button' className='custom__button'>Load More</button>
    </div>
  </section>
);

export default SpecialMenu;
