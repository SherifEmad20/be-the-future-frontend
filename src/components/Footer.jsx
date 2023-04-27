import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='xs-footer-sec xs-footer-v3'>
      <div className='container'>
        <div className='footer-area'>
          <div className='row'>
            <div className='col-lg-3 col-sm-6'>
              <div className='footer-widget'>
                <div className='footer-logo'>
                  <Link to='/'>
                    <img src='images/test.svg' alt='' />
                  </Link>
                  {/* <a href='index.html'>
                    <img src='images/test.svg' alt='' />
                  </a> */}
                </div>
                {/* <p className='text-arabic-r'>
                  أفضل موقع للتواصل بين العميل والموظف ، وإتمام جميع الأعمال ،
                  وتحقيق أعلى مستويات الكفاءة بأقل جهد وأقصر وقت ، بالاعتماد على
                  تقنية الذكاء الاصطناعي
                </p> */}
              </div>
            </div>
            {/* <!-- col end --> */}
            <div className='col-lg-2 offset-lg-1 col-sm-6 mr-special'>
              <div className='footer-widget'>
                <h4 className='widget-title text-arabicc'>شركتنا</h4>
                <ul>
                  <li>
                    <Link to='/about' className='text-arabicc'>
                      {' '}
                      حول نظام Ai Era
                    </Link>
                  </li>
                  <li>
                    <Link to='/service'className='text-arabicc'>
                      {' '}
                      خدمات نظام Ai Era
                    </Link>
                  </li>
                  <li>
                    <a href='/notes' className='text-arabicc'>
                     التسويق الرقمي
                    </a>
                  </li>
                  <li>
                    <a href='/contact' className='text-arabicc'>
                      {' '}
                      صناعة المحتوي الابداعي
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- col end --> */}
            {/* <div className='col-lg-2 col-sm-6'>
              <div className='footer-widget support'>
                <h4 className='widget-title text-arabicc'>الدعم</h4>
                <ul>
                  <li>
                  <Link to='/contact' className='text-arabicc'>
                      {' '}
                     ادارة علاقات العملاء 
                  </Link>
                  </li>
                  <li>
                  <Link to='/issues' className='text-arabicc'>
                      {' '}   
                      اتصالات الأزمات
                  </Link>
                  </li>
                  <li>
                    <Link to='/support' className='text-arabicc'>
                      {' '}  
                      علاقات وسائل الإعلام
                    </Link>
                  </li>
                  <li>
                  <Link to='/notes' className='text-arabicc'>
                      {' '}
                      الاتصال التنظيمي
                  </Link>
                  </li>
                </ul>
              </div>
            </div> */}
            {/* <!-- col end --> */}
            <div className='col-lg-3 offset-lg-1 col-sm-6'>
              <div className='footer-widget'>
                <h4 className='widget-title text-arabicc'>تواصل معنا </h4>
                <form method='get' className='widget-subscibe'>
                  <input
                    type='email'
                    name='email'
                    className='subscribe-email'
                    placeholder='Email'
                  />
                  <button type='submit' className='subs-btn'>
                    <i className='fa fa-paper-plane'></i>
                  </button>
                </form>
                <ul>
                  {/* <li className='text-arabicc'>تليفون: 009-215-5596</li> */}
                  <li className='text-arabicc'>البريد الالكتروني: </li>
                </ul>
              </div>
            </div>
            {/* <!-- col end --> */}
          </div>
          {/* <!-- row end --> */}
        </div>
        {/* <!-- footer area end --> */}

        {/* <!-- copyright area --> */}
        {/* <div className='footer-copyright'>
          <p>Copyright © 2017 trypto Theme</p>
        </div> */}
      </div>
      {/* <!-- container end --> */}
    </footer>
  );
};

export default Footer;
