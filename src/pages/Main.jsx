import { Link } from "react-router-dom";
import myImage1 from "../images/b0392f46-1604-4b52-821e-bd797cf4786e.jpg";
import myImage2 from "../images/Screenshot 2023-04-27 at 2.09.04 AM.png";
import myImage3 from "../images/e0f2ff9c-fbfd-44f5-8b03-402c69339b37.jpg";
import myImage4 from "../images/e946df64-e3b5-42e4-8fe0-c59c7c1a9ea5.jpg";
import myImage5 from "../images/b13a274c-03c9-4e9b-a6c6-47c854a9f0f0.jpg";
import myImage6 from "../images/12f28c11-aedb-4c05-a58a-e3eb24ee8b4e.jpg";
import myImage7 from "../images/5e85adb3-6a6a-4a6f-8108-6fdd9b8994cf.jpg";
import myImage8 from "../images/Screenshot 2023-04-16 at 2.57.15 AM.png";
import myImage9 from "../images/436a5a9f-212e-4259-9a08-58fb7618c356.jpg";
import myImage10 from "../images/Screenshot 2023-04-16 at 3.00.04 AM.png";
import myImage11 from "../images/b5c14823-5e4e-4ad5-9b6b-c419f2a5eddc.jpg";
import myImage12 from "../images/Screenshot 2023-04-16 at 3.02.00 AM.png";
import myImage13 from "../images/Screenshot 2023-04-16 at 3.04.22 AM.png";
import myImage14 from "../images/4cdef3fb-b6d5-41b8-b0e0-057668de6513.jpg";
import myImage15 from "../images/Screenshot 2023-04-16 at 3.06.54 AM.png";
import myImage16 from "../images/WhatsApp Image 2023-04-17 at 3.04.42 AM.jpeg";
import myImage17 from "../images/80e74878-ab49-4760-b624-26f32569773a.jpg";

const Main = () => {
  return (
    <>
      <section className="banner-sec banner-v2 banner-v3">
        <div className="banner-item">
          <div className="banner-table">
            <div className="banner-table-cell">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6 col-md-8">
                    <div className="banner-content">
                      <h1 className="banner-title font-ping-bold">
                        Be The Future
                      </h1>
                      <p>
                      أكفأ و أسرع نظام يدعم العلاقات العامه بإستخدام تقنيات الذكاء الإصطناعي
                      </p>
                      <Link to="/register" className="btn btn-v3">
                        إنضم إلينا
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--  .container END --> */}
            </div>
          </div>
          <div className="banner-v2-img">
            <img className="banner-img" src="images/banner/b-main.jpg" alt="" />
            <img
              className="banner-ico banner-ico-1"
              src="images/banner-icon.svg"
              alt=""
            />
          </div>
        </div>
      </section>
      {/* <!-- banner section end --> */}

      {/* <!-- blockcain section start --> */}
      <section className="blockcain-top-sec blockcain-v3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 wow fadeInUp" data-wow-duration="1.5s">
              <div className="blockcain-top">
                <h2 className="hidden-title">BeTheFuture</h2>
                <h2 className="column-title text-arabicc font-ping-bold">
                يعتمد مستقبل العالم بأجمعه علي تقنيات الذكاء  الإصطناعي .                </h2>
              </div>
            </div>
            {/* <!-- col end --> */}
            <div
              className="col-md-5 offset-md-1 wow fadeInUp"
              data-wow-duration="2s"
            >
              <div className="blockcain-top-content">
                <p className="text-arabicc">
                لقد ساعدنا الذكاء الإصطناعي علي إنشاء أنظمه ذات كفاءة عالية كما ساعد في سرعة التواصل مع العملاء  و تحديد الأنماط  و حل المشكلات و العوائق ، و جعلنا نعتمد علي  التنبؤات  التي تحددها  النماذج التنبؤيه من أجل إتمام  جميع المهام المعقده
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* </section>
    <!-- blockcain section end --> */}

        {/* <!-- featured section start --> */}
        <section
          className="featured-sec featured-v3 section-p-120 blockchine-bg"
          // style='
          //   background: url(assets/images/feature/blockcain_feature_bg_v3.jpg)
          //   no-repeat center center / cover;
          // '
          id="featured"
        >
          <div className="container" id="particles-js">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="section-title-item v3">
                  {/* <small className="xs-section-title font-ping-medium">
                    خدمات الموقع
                  </small> */}
                  <h2 className="section-title font-ping-bold">
                  أهم ما يقدمه  Ai Era System
                  </h2>
                </div>
              </div>
            </div>
            {/* <!-- row end --> */}
            <div className="main-fetured-item">
              <div className="row">
                <div className="col-md-4 wow fadeInUp" data-wow-duration="1.5s">
                  <div className="single-feaured-item">
                    <img src="images/feature/icon-1.png" alt="" />
                    <h3 className="feature-title font-ping-bold">
                      محادثة جماعية
                    </h3>
                    <p className="font-ping-medium">
                    يمكن  Ai Era System جميع الموظفين من المشاركة لتبادل الأفكار و الآراء التي تهدف الي تقدم و رقي المؤسسه .
                    </p>
                  </div>
                </div>
                {/* <!-- col end --> */}
                <div className="col-md-4 wow fadeInUp" data-wow-duration="2s">
                  <div className="single-feaured-item">
                    <img src="images/feature/icon-2.png" alt="" />
                    <h3 className="feature-title font-ping-bold">
                      تدريبات خاصة
                    </h3>
                    <p className="font-ping-medium">
                    يمكن  Ai Era System الموظفين من تحسين كفاءتهم عن طريق توفير كافة التدريبات التي يحتاج اليها الموظف بستخدام تقنيات الذكاء الإصطناعي .
                    </p>
                  </div>
                </div>
                {/* <!-- col end --> */}
                <div className="col-md-4 wow fadeInUp" data-wow-duration="2.5s">
                  <div className="single-feaured-item">
                    <img src="images/feature/icon-3.png" alt="" />
                    <h3 className="feature-title font-ping-bold">
                      مهام اضافية
                    </h3>
                    <p className="font-ping-medium">
                    يمكن  Ai Era System الموظفين من مساعدة بعضهم البعض عن طريق القيام بالمهام الاضافية و ذلك بمقابل مادي يحدد علي حسب المهمة المطلوب إتمامها
                    </p>
                  </div>
                </div>
                {/* <!-- col end --> */}
              </div>
              {/* <!-- row end --> */}
            </div>
            {/* <!-- main-fetured-item end --> */}

            <div
              className="featured-poligonal-img wow fadeInRight"
              data-wow-duration="1.5s"
            >
              <img
                className="poligonal-img"
                src="images/feature/poligonal_3.png"
                alt=""
              />
            </div>
          </div>
        </section>
        {/* <!-- featured section end --> */}

        {/* <!-- blockcain business section start --> */}
        <section className="blockcain-business-sec blockcain-business-v3">
          <div className="container">
            <div className="row">
              <div
                className="col-md-6 col-lg-6 wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <div className="blockcain-img">
                  <img src="images/blockchain/block_img_2.png" alt="" />
                </div>
              </div>
              {/* <!-- col end --> */}
              <div
                className="col-md-6 col-lg-5 offset-lg-1 wow fadeInUp"
                data-wow-duration="2s"
              >
                <div className="blockcain-content">
                  <h3 className="column-title text-arabicc font-ping-bold">
                  يقدم  Ai Era System أفضل حل للتواصل بين موظفين الشركة وعملائها 
                  </h3>
                  <p className="text-arabicc font-ping-medium">
                    موقعنا يقدم افضل و اميز حل للتواصل السريع و السهل بين
                    الموظفين و العملاء، يجمع بين اراء العملاء و كفاءة الموظفين
                    للحصول علي افضل انتاج و اكفأ عمل، تم استخدام الذكاء
                    الاصطناعي لتقييم أداء الموظفين بناءا علي أدائهم في المهام، و
                    لتحديد افضل الموظفين للقيام بمهام محددة حتي يقدموا افضل ما
                    عندهم، كما اُستخدم لتحديد مراحل القوة في العمل لتحقيق اعلي
                    كفاءة بأقل جهد و اسرع وقت.
                  </p>
                  <Link to="/register" className="btn btn-v3">
                    انضم الينا و احصل علي أكفأ النتائج..
                  </Link>
                  {/* <a href='#' className='btn btn-v3'>
                    انضم الينا و احصل علي أكفأ النتائج..
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- blockcain business section end --> */}

        {/* <!-- how work section start --> */}
        <section
          className="how-work-sec how-work-v3 section-p-120 how-works-bg-v3"
          id="how_work"
          // style='
          //   background: url(assets/images/how-works/how_work_bg_3.jpg) no-repeat
          //   center center/cover;'
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="section-title-item v3">
                  <h2 className="section-title">نظام اتمام المهام</h2>
                </div>
              </div>
            </div>
            {/* <!-- row end --> */}
            <div className="row">
              <div
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <div className="xs-count-down">
                  <h3 className="xs-single-title font-ping-bold">
                    المهمة تنتهي خلال
                  </h3>

                  <ul className="xs-counter-list">
                    <li>
                      <strong id="xs_hours">30</strong>
                      <span>ساعات</span>
                    </li>
                    <li>
                      <strong id="xs_minuts">24</strong>
                      <span>دقائق</span>
                    </li>
                    <li>
                      <strong id="xs_second">24</strong>
                      <span>ثواني</span>
                    </li>
                  </ul>

                  {/* <div className='xs-progress-bar'>
                    <span className='progess-text-1'>Sold: $28,985,879</span>
                    <span className='progess-text-2'>$50,000</span>
                    <div className='xs-bar'>
                      <div className='bar-bg'></div>
                    </div>
                  </div> */}

                  <div className="btn-wrapper text-center">
                    <Link to="/overload">
                      <button className="btn btn-v3" type="submit">
                        انجز مهامك
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              {/* <!-- col end --> */}
              <div
                className="col-lg-3 offset-lg-1 col-md-6 wow fadeInUp align-self-center"
                data-wow-duration="2s"
              >
                <div className="work-token-item">
                  <ul>
                    <li>
                      <strong>مرحلة ما قبل العمل علي المشروع :</strong>
                      <span> تخزين بيانات المشروع</span>
                    </li>
                    <li>
                      <strong> مرحلة ما بعد تخزين البيانات :</strong>
                      <span>تقسيم العمل الي مجموعة مهام</span>
                    </li>
                    <li>
                      <strong> مرحلة ما بعد تقسيم المهام :</strong>
                      <span>
                        يتم جمع جميع المهام من قبل المدير الخاص بالمشروع
                      </span>
                    </li>
                    <li>
                      <strong> اخر مرحلة في نظام العمل :</strong>
                      <span>تسليم المشروع للعميل و استلام النقدية</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- col end --> */}
              <div
                className="col-lg-4 align-self-center col-md-12 wow fadeInUp"
                data-wow-duration="2.5s"
              >
                <div className="work-video">
                  <img src="images/how-works/video3.png" alt="" />
                  <a
                    href="https://www.youtube.com/watch?v=qdHMrZGG-MQ"
                    className="video-btn xs-video"
                    data-effect="mfp-zoom-in"
                  >
                    <i className="icon icon-play-button2"></i>
                    <span className="btn-hover-anim"></span>
                  </a>
                </div>
              </div>
              {/* <!-- col end --> */}
            </div>
            {/* <!-- row end --> */}
          </div>
        </section>
        {/* <!-- how work section end --> */}

        {/* <!-- how work section start --> */}
        <section className="token-distribution-sec token-distribution-v3 section-p-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="section-title-item">
                  <small className="xs-section-title">خط سير العمل</small>
                  <h2 className="section-title">خطة العمل</h2>
                </div>
              </div>
            </div>
            {/* <!-- row end --> */}
            <div className="row">
              <div className="col-lg-6 wow fadeInUp" data-wow-duration="1.5s">
                <div className="row chart-gap">
                  <div className="col-sm-7 ml-lg-auto">
                    <h3 className="xs-single-title">خطة إنجاز المشروع</h3>
                  </div>
                  {/* <!-- Col End --> */}
                  <div className="col-sm-5">
                    <ul className="chart-label">
                      <li>
                        <img src="images/token/label_img1.png" alt="" />
                        <span className="chart-bg1">10 %</span> تخزين بيانات
                        المشروع
                      </li>
                      <li>
                        <img src="images/token/label_img2.png" alt="" />
                        <span className="chart-bg2">08 %</span> الإتفاق علي
                        الأمور المادية
                      </li>
                      <li>
                        <img src="images/token/label_img3.png" alt="" />
                        <span className="chart-bg3">12 %</span> تحديد فريق العمل
                        و تقسيم المشروع لمهامٍ
                      </li>
                      <li>
                        <img src="images/token/label_img4.png" alt="" />
                        <span className="chart-bg4">70 %</span> إنجاز المهام و
                        تجميعها لتسليم المشروع
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Chart Label End --> */}
                </div>
                {/* <!-- Row End --> */}
              </div>
              {/* <!-- Col End --> */}
              <div className="col-lg-6 wow fadeInUp" data-wow-duration="2s">
                <div className="row chart-gap">
                  <div className="col-sm-7 ml-lg-auto">
                    <h3 className="xs-single-title">عملية إختيار التدريب</h3>
                  </div>
                  {/* <!-- Col End --> */}
                  <div className="col-sm-5">
                    <ul className="chart-label">
                      <li>
                        <img src="images/token/label_img1.png" alt="" />
                        <span className="chart-bg1">15 %</span> تصويت جميع
                        الموطفين
                      </li>
                      <li>
                        <img src="images/token/label_img2.png" alt="" />
                        <span className="chart-bg2">35 %</span> عملية تنقية
                        التصويت
                      </li>
                      <li>
                        <img src="images/token/label_img3.png" alt="" />
                        <span className="chart-bg3">40 %</span>تحديد التدريب
                        المناسب للموظفين
                      </li>
                      <li>
                        <img src="images/token/label_img4.png" alt="" />
                        <span className="chart-bg4">10 %</span> إتاحة التدريب
                        للتسجيل
                      </li>
                    </ul>
                  </div>
                  {/* <!-- Chart Label End --> */}
                </div>
                {/* <!-- Row End --> */}
              </div>
              {/* <!-- Col End --> */}
            </div>
            {/* <!-- Row End --> */}
          </div>
        </section>
        {/* <!-- how work section end --> */}

        {/* <!-- roadmap section start --> */}
        <section className="roadmap-sec roadmap-v3 section-p-120">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="section-title-item">
                  <small className="xs-section-title font-ping-medium">
                    سير العملية
                  </small>
                  <h2 className="section-title">خط سير الشركة</h2>
                </div>
              </div>
            </div>
            {/* <!-- row end --> */}
            <div className="roadmap-timeline">
              <img src="images/roadmap/timelinered.png" alt="" />
              <div className="custom-container container">
                <div className="row roadmap-timeline-item">
                  <div
                    className="col-md xs-roadmap wow fadeInUp"
                    data-wow-duration="1.5s"
                  >
                    <div className="single-roadmap-timeline">
                      <b></b>
                      <h3>أغسطس ٢٠٢٢</h3>
                      <p>انشاء الشركة</p>
                    </div>
                  </div>

                  <div
                    className="col-md xs-roadmap wow fadeInUp"
                    data-wow-duration="2s"
                  >
                    <div className="single-roadmap-timeline">
                      <b></b>
                      <h3>سبتمبر ٢٠٢٢</h3>
                      <p>تحقيق الهدف </p>
                    </div>
                  </div>

                  <div
                    className="col-md xs-roadmap wow fadeInUp"
                    data-wow-duration="2.5s"
                  >
                    <div className="single-roadmap-timeline">
                      <b></b>
                      <h3>أكتوبر ٢٠٢٢</h3>
                      <p>
                        تصدر موقعنا المرتبة الخامسة كا افضل موقع ويب للعلاقات
                        العامة بتقنية الذكاء الاصطناعي{" "}
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-md xs-roadmap wow fadeInUp"
                    data-wow-duration="3s"
                  >
                    <div className="single-roadmap-timeline">
                      <b></b>
                      <h3>نوفمبر ٢٠٢٢</h3>
                      <p>عمل تعاقد مع اهم و اكفأ الشركات في الوطن العربي</p>
                    </div>
                  </div>

                  <div
                    className="col-md xs-roadmap wow fadeInUp"
                    data-wow-duration="3.5s"
                  >
                    <div className="single-roadmap-timeline">
                      <b></b>
                      <h3>ديسمبر ٢٠٢٢</h3>
                      <p>زيادة عدد المستخدمين بنسبة ٨٥٪ </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- row end --> */}
            <div className="roadmap-timeline">
              <img src="images/roadmap/timelinered.png" alt="" />
              <div className="custom-container container">
                <div className="row roadmap-timeline-item">
                  <div
                    className="col-md xs-roadmap wow fadeInUp"
                    data-wow-duration="1.5s"
                  >
                    <div className="single-roadmap-timeline">
                      <b></b>
                      <h3>يناير ٢٠٢٣</h3>
                      <p>زيادة كفاءة الانتاج بنسبة ٩٠٪</p>
                    </div>
                  </div>

                  <div
                    className="col-md xs-roadmap wow fadeInUp"
                    data-wow-duration="2s"
                  >
                    <div className="single-roadmap-timeline">
                      <b></b>
                      <h3>فبراير ٢٠٢٣</h3>
                      <p>تحقيق الهدف الرئيسي للمؤسسة</p>
                    </div>
                  </div>

                  <div
                    className="col-md xs-roadmap wow fadeInUp"
                    data-wow-duration="2.5s"
                  >
                    <div className="single-roadmap-timeline">
                      <b></b>
                      <h3>مارس ٢٠٢٣</h3>
                      <p>أفضل موقع ويب في مجال العلاقات العامة بتقنية AI</p>
                    </div>
                  </div>

                  <div
                    className="col-md xs-roadmap wow fadeInUp"
                    data-wow-duration="3s"
                  >
                    <div className="single-roadmap-timeline">
                      <b></b>
                      <h3>ابريل ٢٠٢٣</h3>
                      <p>
                        تطوير الخدمات التي يقدمها الموقع مما زاد من كفاءة
                        الانتاج بنسبة ١٠٠٪
                      </p>
                    </div>
                  </div>

                  <div
                    className="col-md xs-roadmap wow fadeInUp"
                    data-wow-duration="3.5s"
                  >
                    <div className="single-roadmap-timeline">
                      <b></b>
                      <h3>مايو ٢٠٢٣</h3>
                      <p>التعاقد مع اهم شركات العالم والوصول لقمة النجاح</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- container fluid end --> */}
        </section>
        {/* <!-- roadmap section end --> */}

        {/* <!-- social list section start --> */}
        <section className="social-list-sec social-list-v3 section-p-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="section-title-item">
                  <small className="xs-section-title">تواصل معنا</small>
                  <h2 className="section-title">
                    انضم إلينا على مواقع التواصل الاجتماعي
                  </h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div
                className="col-lg col-6 col-md-3 wow fadeInUp"
                data-wow-duration=".5s"
              >
                <div className="single-social-list facebook">
                  <i className="fa fa-facebook"></i>
                  <h3 className="xs-title sm">Facebook</h3>
                  <a href="https://www.facebook.com/profile.php?id=100089908270205&mibextid=LQQJ4d">
                    <span className="icon icon-arrow-right"></span>
                  </a>
                </div>
              </div>
              {/* <!-- single-social-list--> */}
              <div
                className="col-lg col-6 col-md-3 wow fadeInUp"
                data-wow-duration="1s"
              >
                <div className="single-social-list twitter">
                  <i className="fa fa-twitter"></i>
                  <h3 className="xs-title sm">Instagram</h3>
                  <a href="https://instagram.com/_ai_era?igshid=YmMyMTA2M2Y=">
                    <span className="icon icon-arrow-right"></span>
                  </a>
                </div>
              </div>
              {/* <!-- single-social-list--> */}
              <div
                className="col-lg col-6 col-md-3 wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <div className="single-social-list github">
                  <i className="fa fa-github-alt"></i>
                  <h3 className="xs-title sm">TikTok</h3>
                  <a href="https://www.tiktok.com/@_ai_era?_t=8aoedud4zdy&_r=1">
                    <span className="icon icon-arrow-right"></span>
                  </a>
                </div>
              </div>

              {/* <!-- single-social-list--> */}
            </div>
            {/* <!-- Row End --> */}
          </div>
        </section>
        {/* <!-- social list section end --> */}

        {/* <!-- docuemnt section start --> */}
        <section className="docement-v3 section-p-120">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="section-title-item v3">
                  {/* <small className="xs-section-title">توثيق</small> */}
                  <h2 className="section-title">الوثائق الخاصة بموقعنا</h2>
                </div>
              </div>
            </div>
            {/* <!-- row end --> */}
            <div className="row">
              <div
                className="col-lg-8 mx-auto wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <div
                  className="nav xs-tabs-menu"
                  id="v-pills-tab"
                  role="tablist"
                  aria-orientation="horizontal"
                >
                  {/* <a
                    className="active col-md"
                    id="v-pills-home-tab"
                    data-toggle="pill"
                    href="#v-pills-home"
                    role="tab"
                    aria-controls="v-pills-home"
                    aria-selected="true"
                  >
                    <i className="icon-wallet"></i>
                    خطوات اتمام الموقع
                  </a> */}

                  {/* <a
                    className="col-md"
                    id="v-pills-profile-tab"
                    data-toggle="pill"
                    href="#v-pills-paper"
                    role="tab"
                    aria-controls="v-pills-paper"
                    aria-selected="false"
                  >
                    <i className="icon-whitepaper"></i>
                    التقنيات المستخدمة في الموقع
                  </a> */}

                  <a
                    className="col-md"
                    id="v-pills-report-tab"
                    data-toggle="pill"
                    href="#v-pills-reports"
                    role="tab"
                    aria-controls="v-pills-reports"
                    aria-selected="false"
                  >
                    <i className="icon-report"></i>
                    كيفيه التعامل مع  Ai Era System
                  </a>

                  <a
                    className="col-md"
                    id="v-pills-ico-tab"
                    data-toggle="pill"
                    href="#v-pills-ICO"
                    role="tab"
                    aria-controls="v-pills-ICO"
                    aria-selected="false"
                  >
                    <i className="icon-structure"></i>
                    دور الذكاء الاصطناعي في  Ai Era System
                  </a>
                </div>
                {/* <!-- tab menu end --> */}

                <div className="road-map-tab">
                  <div className="tab-content" id="v-pills-tabContent">
                    <div
                      className="tab-pane tab_item_1 show active"
                      id="v-pills-home"
                      role="tabpanel"
                      aria-labelledby="v-pills-home-tab"
                    >
                      <div className="row">
                        <div className="col-md-6 align-self-center">
                          <div className="xs-tabs-content">
                            {/* <h3 className="xs-single-title">
                              احصل علي الوثيقة
                            </h3>
                            <span className="release_vertion">أحدث وثيقة</span> */}

                            {/* <ul className='download-logo'>
                              <li>
                                <img
                                  src='images/documentation/windows_logo-1.png'
                                  alt=''
                                />
                              </li>
                              <li>
                                <img
                                  src='images/documentation/windows_logo-2.png'
                                  alt=''
                                />
                              </li>
                              <li>
                                <img
                                  src='images/documentation/mac_ico.png'
                                  alt=''
                                />
                              </li>
                              <li>
                                <img
                                  src='images/documentation/linux_1.png'
                                  alt=''
                                />
                              </li>
                              <li>
                                <img
                                  src='images/documentation/android_1.png'
                                  alt=''
                                />
                              </li>
                            </ul> */}
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="xs-tabs-img">
                            <img
                              src="images/documentation/wallter_phones_v3.png"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- tab pane tab_item_1--> */}
                    <div
                      className="tab-pane tab_item_2"
                      id="v-pills-paper"
                      role="tabpanel"
                      aria-labelledby="v-pills-profile-tab"
                    >
                      <div className="row">
                        <div className="col-md-6">
                          <div className="xs-tabs-img text-center">
                            <img
                              src="images/documentation/whitepaper.png"
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="xs-white-tabs-content">
                            <h3 className="xs-single-title">الوثائق</h3>
                            <p>
                              أفضل طريقة لبناء موقع ويب يخدم عصر الذكاء
                              الاصطناعي هو اختيار تقنيات و لغات برمجة تتماشي مع
                              الذكاء الاصطناعي، لذلك تم اختيار و استخدام افضل و
                              اتقن لغات البرمجة التي تخص الذكاء الاصطناعي، تم
                              استخدام افضل التقنيات لتحقيق هدفنا الرئيسي و
                              الأساسي و هو خدمة قسم العلاقات العامة بإستخدام
                              تقنية الAI
                            </p>
                            <Link to="/about">
                              <button className="btn btn-v3" type="submit">
                                تعرف علي موقعنا
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* <!-- tab pane tab_item_2--> */}
                    <div
                      className="tab-pane tab_item_3"
                      id="v-pills-reports"
                      role="tabpanel"
                      aria-labelledby="v-pills-report-tab"
                    >
                      <div className='man-nahn2'>
                        <ul>
                        {/* <li>
                        مؤسسة AI ERA هي مجموعة من الأنظمة المشتركة لمواكبة العصر الحالي
                        للتكنولوجيا، ولبناء تلك الأنظمة تم الاستعانة ب تقنية الذكاء
                        الاصطناعي لمساعدة قسم العلاقات العامة في إدارة أنظمة المؤسسة.
                        </li>
                        <br /> */}

                        <li>
                        <p> تسجيل الدخول للموقع:  </p>
                        يمكن Ai Era System المستخدم من إنشاء حساب جديد عن طريق الضغط علي زر (إنضم إلينا) الموجود بأعلي الصفحة الرئيسية
                        </li>
                        <br />

                        <li>
                        <p>تحديد الملف الشخصي:  </p>
                        يمكن Ai Era System المستخدم من تحديد الملف الشخصي الذي يود إنشائه أثناء عملية تسجيل الدخول سواء كان (موظف ، عميل ، مدير)
                        </li>
                        <br />

                        <li>
                        <p>في حاله كان المستخدم عميل :</p>
                        يمكن Ai Era System العميل من إضافة المشروع الخاص به وإدخال جميع البيانات المطلوبة ، يمكنه ايضا من تعديل بيانات ملفه الشخصى في أي وقت، بالإضافة الي خاصية ال chatbot المميزة بالموقع ليتم الإجابة علي جميع أسئلة العميل بطريقة سريعة
                        </li>
                        <br />


                        <li>
                        <p>في حاله كان المستخدم موظف :</p>
                        يمكن Ai Era System الموظف من إضافة المهام الإضافية التي لم يقدر علي إنجازها، يمكنه أيضا من مراجعه جميع الدورات المتاحه بالموقع و التصويت علي أي دوره يريد التسجيل بها، بالإضافة لخاصية ال chatroom الخاصة بموظفين الشركة للتواصل معا بسهولة وحل المشكلات
                        </li>
                        <br />


                        <li>
                        <p>في حاله كان المستخدم مدير :</p>
                        يمكن Ai Era System المدير من مراجعه جميع المشاريع التي تم إضافتها من قبل العملاء لتقسيم كل مشروع لمجموعه مهام و كل مهمه يكلف بها موظف معين، يمكنه ايضا من إضافة الدورات التي تفيد الموظفين، بالإضافة الي إضافة نقاط إضافية لكل موظف عندما يقوم بإنجاز مهمه إضافية علي مهامه
                        </li>
                        <br />
                        </ul>
                        </div>  
                      
                      <div className="report-table table-responsive">
                        {/* <table className='table'>
                          <thead>
                            <tr>
                              <th>Name</th>
                              <th>Price</th>
                              <th>24 hr% change</th>
                              <th>market Cap</th>
                              <th>24hr volume</th>
                              <th>price graph</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <img
                                  src='images/documentation/icon1.png'
                                  alt=''
                                />
                                Bitcoin
                              </td>
                              <td>$1097201</td>
                              <td className='change'>-2.45%</td>
                              <td>$73.99B</td>
                              <td>$4.588</td>
                              <td>
                                <img
                                  src='images/documentation/signal.png'
                                  alt=''
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src='images/documentation/icon2.png'
                                  alt=''
                                />
                                Ethereum
                              </td>
                              <td>$1097201</td>
                              <td className='change'>-2.45%</td>
                              <td>$73.99B</td>
                              <td>$4.588</td>
                              <td>
                                <img
                                  src='images/documentation/signal.png'
                                  alt=''
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src='images/documentation/icon1.png'
                                  alt=''
                                />
                                Bitcoin Cash
                              </td>
                              <td>$1097201</td>
                              <td className='change'>-2.45%</td>
                              <td>$73.99B</td>
                              <td>$4.588</td>
                              <td>
                                <img
                                  src='images/documentation/signal.png'
                                  alt=''
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src='images/documentation/icon3.png'
                                  alt=''
                                />
                                Ripple
                              </td>
                              <td>$1097201</td>
                              <td className='change'>-2.45%</td>
                              <td>$73.99B</td>
                              <td>$4.588</td>
                              <td>
                                <img
                                  src='images/documentation/signal.png'
                                  alt=''
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src='images/documentation/icon4.png'
                                  alt=''
                                />
                                IOTA
                              </td>
                              <td>$1097201</td>
                              <td className='change'>-2.45%</td>
                              <td>$73.99B</td>
                              <td>$4.588</td>
                              <td>
                                <img
                                  src='images/documentation/signal.png'
                                  alt=''
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src='images/documentation/icon1.png'
                                  alt=''
                                />
                                Bitcoin Gold
                              </td>
                              <td>$1097201</td>
                              <td className='change'>-2.45%</td>
                              <td>$73.99B</td>
                              <td>$4.588</td>
                              <td>
                                <img
                                  src='images/documentation/signal.png'
                                  alt=''
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src='images/documentation/icon2.png'
                                  alt=''
                                />
                                Ethereum classNameic
                              </td>
                              <td>$1097201</td>
                              <td className='change'>-2.45%</td>
                              <td>$73.99B</td>
                              <td>$4.588</td>
                              <td>
                                <img
                                  src='images/documentation/signal.png'
                                  alt=''
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src='images/documentation/icon5.png'
                                  alt=''
                                />
                                OmiseGO
                              </td>
                              <td>$1097201</td>
                              <td className='change'>-2.45%</td>
                              <td>$73.99B</td>
                              <td>$4.588</td>
                              <td>
                                <img
                                  src='images/documentation/signal.png'
                                  alt=''
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src='images/documentation/icon2.png'
                                  alt=''
                                />
                                Ethereum
                              </td>
                              <td>$1097201</td>
                              <td className='change'>-2.45%</td>
                              <td>$73.99B</td>
                              <td>$4.588</td>
                              <td>
                                <img
                                  src='images/documentation/signal.png'
                                  alt=''
                                />
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <img
                                  src='images/documentation/icon1.png'
                                  alt=''
                                />
                                Bitcoin
                              </td>
                              <td>$1097201</td>
                              <td className='change'>-2.45%</td>
                              <td>$73.99B</td>
                              <td>$4.588</td>
                              <td>
                                <img
                                  src='images/documentation/signal.png'
                                  alt=''
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table> */}
                      </div>
                    </div>
                    {/* <!-- tab pane tab_item_3--> */}
                    <div
                      className="tab-pane tab_item_4"
                      id="v-pills-ICO"
                      role="tabpanel"
                      aria-labelledby="v-pills-ico-tab"
                    >
                      <div className="ico-table table-responsive">
                        <table className="table">
                          <tbody>
                            <tr>
                              <td>
                              تم توظيف الذكاء الإصطناعي لمساعدة مدير الموارد البشريه (hr) في تقييم أداء الموظفين بناءً علي ما تم تقديمه من أعمال و مهام و معرفة ما يحتاجه كل موظف لتحسين عمله .
                              </td>
                              <td>٦/٣/٢٠٢٣</td>
                            </tr>
                            <tr>
                              <td>
                              تم استخدام ML وھي تقنیة ذكاء اصطناعي لعمل نمذجة
                                تنبؤیة لاختیار أفضل الموظفین ل عمل مھام محددة،
                                ولاختیار مراحل القوة في العمل لتحقیق اعلي كفاءة
                                بأقل جھد و أسرع وقت
                              </td>
                              <td>٨/٣/٢٠٢٣</td>
                            </tr>
                            <tr>
                              <td>
                              تم استخدام ال AI في القیام بعملیة تنقیة تلقائیة
                                من اراء العملاء والمشاكل التي قد حدثت من قبل في
                                الاستفادة من تلك المشكلات والخطوات التي یجب
                              اتباعها لعدم الوقوع في تلك المشكلات
                              </td>
                              <td>٨/٣/٢٠٢٣</td>
                            </tr>
                            <tr>
                              <td>
                              تم استخدام ال ML كا تقنیة لعمل نمذجة تنبؤیة بما
                                سوف تحققھ الشركة لو توفرت تدریبات محددة للموظفین
                                لزیادة كفائتھم في العمل وتقلیل وقت العمل
                              </td>
                              <td>٩/٣/٢٠٢٣</td>
                            </tr>
                            <tr>
                              <td>
                              یوجد Chatbot باستخدام تقنیة ال AI، وھو مسئول على
                                الرد على العملاء وأي استفسار یخص الویب بشكل تلقائي و في أسرع وقت .
                              </td>
                              <td>٩/٣/٢٠٢٣</td>
                            </tr>
                            <tr>
                              <td>
                              تم استخدام ال AI في اختيار تصمیمات الوجهه تتناسب
                                مع موضوع الویب ومع الموضوعات/الخدمات التي یقدمھا
                                الویب
                              </td>
                              <td>١٠/٣/٢٠٢٣</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    {/* <!-- tab pane tab_item_4--> */}
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- row end --> */}
          </div>
          {/* <!-- container end --> */}
          <div className="documentaion-shap-img">
            <img
              className="d-shap-img-1 wow fadeInLeft"
              data-wow-duration="1.5s"
              src="images/documentation/globe1.png"
              alt=""
            />
            <img
              className="d-shap-img-2 wow fadeInRight"
              data-wow-duration="1.5s"
              src="images/documentation/globe2.png"
              alt=""
            />
            <img
              className="d-shap-img-3 wow fadeInUp"
              data-wow-duration="1.5s"
              src="images/documentation/rectangle.png"
              alt=""
            />
          </div>
        </section>
        {/* <!-- document section end --> */}

        {/* <!-- team section start --> */}
        <section
          className="team-sec team-v2-sec team-v3 section-p-120"
          id="team"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <div className="section-title-item">
                  {/* <small className="xs-section-title">خبراءنا المتميزين</small> */}
                  <h2 className="section-title">مؤسسين Ai Era System</h2>
                </div>
              </div>
            </div>
            {/* <!-- row end --> */}
            <div className="row">
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <div className="single-team">
                  <div className="team-img">
                    <img src={myImage1} alt="" />
                  </div>
                  <div className="team-content">
                    <h3 className="xs-title md">أحمد طائل</h3>
                    {/* <p>CEO</p>
                    <div className="team-social">
                      <a href="#">
                        <i className="icon icon-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-linkedin"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <!-- Col End --> */}
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <div className="single-team">
                  <div className="team-img">
                    <img src={myImage2} alt="" />
                  </div>
                  <div className="team-content">
                    <h3 className="xs-title md">آيه محمد</h3>
                    {/* <p>CEO</p>
                    <div className="team-social">
                      <a href="#">
                        <i className="icon icon-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-linkedin"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <!-- Col End --> */}
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <div className="single-team">
                  <div className="team-img">
                    <img src={myImage3} alt="" />
                  </div>
                  <div className="team-content">
                    <h3 className="xs-title md">ايمان مدين</h3>
                    {/* <p>CEO</p>
                    <div className="team-social">
                      <a href="#">
                        <i className="icon icon-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-linkedin"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <!-- Col End --> */}
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <div className="single-team">
                  <div className="team-img">
                    <img src={myImage4} alt="" />
                  </div>
                  <div className="team-content">
                    <h3 className="xs-title md">بافلي رضا</h3>
                    {/* <p>CEO</p>
                    <div className="team-social">
                      <a href="#">
                        <i className="icon icon-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-linkedin"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <!-- Col End --> */}
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <div className="single-team">
                  <div className="team-img">
                    <img src={myImage5} alt="" />
                  </div>
                  <div className="team-content">
                    <h3 className="xs-title md">رانا ابراهيم</h3>
                    {/* <p>CEO</p>
                    <div className="team-social">
                      <a href="#">
                        <i className="icon icon-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-linkedin"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <!-- Col End --> */}
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <div className="single-team">
                  <div className="team-img">
                    <img src={myImage6} alt="" />
                  </div>
                  <div className="team-content">
                    <h3 className="xs-title md">رانيا ناصر</h3>
                    {/* <p>CEO</p>
                    <div className="team-social">
                      <a href="#">
                        <i className="icon icon-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-linkedin"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <!-- Col End --> */}
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <div className="single-team">
                  <div className="team-img">
                    <img src={myImage7} alt="" />
                  </div>
                  <div className="team-content">
                    <h3 className="xs-title md">ساره جمال</h3>
                    {/* <p>CEO</p>
                    <div className="team-social">
                      <a href="#">
                        <i className="icon icon-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-linkedin"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <!-- Col End --> */}
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <div className="single-team">
                  <div className="team-img">
                    <img src={myImage8} alt="" />
                  </div>
                  <div className="team-content">
                    <h3 className="xs-title md">سلمي محمد</h3>
                    {/* <p>CEO</p>
                    <div className="team-social">
                      <a href="#">
                        <i className="icon icon-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-linkedin"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <!-- Col End --> */}
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <div className="single-team">
                  <div className="team-img">
                    <img src={myImage9} alt="" />
                  </div>
                  <div className="team-content">
                    <h3 className="xs-title md">سلمي مدحت</h3>
                    {/* <p>CEO</p>
                    <div className="team-social">
                      <a href="#">
                        <i className="icon icon-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-linkedin"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <!-- Col End --> */}
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <div className="single-team">
                  <div className="team-img">
                    <img src={myImage10} alt="" />
                  </div>
                  <div className="team-content">
                    <h3 className="xs-title md">عبدالرحمن محمد</h3>
                    {/* <p>CEO</p>
                    <div className="team-social">
                      <a href="#">
                        <i className="icon icon-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-linkedin"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <!-- Col End --> */}
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <div className="single-team">
                  <div className="team-img">
                    <img src={myImage11} alt="" />
                  </div>
                  <div className="team-content">
                    <h3 className="xs-title md">فرح حسام</h3>
                    {/* <p>CEO</p>
                    <div className="team-social">
                      <a href="#">
                        <i className="icon icon-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-linkedin"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <!-- Col End --> */}
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-duration="2s"
              >
                <div className="single-team">
                  <div className="team-img">
                    <img src={myImage12} alt="" />
                  </div>
                  <div className="team-content">
                    <h3 className="xs-title md">كلارا اسحاق</h3>
                    {/* <p>Manager</p>
                    <div className="team-social">
                      <a href="#">
                        <i className="icon icon-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-linkedin"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <!-- Col End --> */}
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-duration="2.5s"
              >
                <div className="single-team">
                  <div className="team-img">
                    <img src={myImage13} alt="" />
                  </div>
                  <div className="team-content">
                    <h3 className="xs-title md">محمد جمال</h3>
                    {/* <p>HR Head</p>
                    <div className="team-social">
                      <a href="#">
                        <i className="icon icon-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-linkedin"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <!-- Col End --> */}
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-duration="3s"
              >
                <div className="single-team">
                  <div className="team-img">
                    <img src={myImage14} alt="" />
                  </div>
                  <div className="team-content">
                    <h3 className="xs-title md">مهتاب صلاح</h3>
                    {/* <p>Lead Designer</p>
                    <div className="team-social">
                      <a href="#">
                        <i className="icon icon-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-linkedin"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <!-- Col End --> */}
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <div className="single-team">
                  <div className="team-img">
                    <img src={myImage15} alt="" />
                  </div>
                  <div className="team-content">
                    <h3 className="xs-title md">هاله صلاح</h3>
                    {/* <p>CEO</p>
                    <div className="team-social">
                      <a href="#">
                        <i className="icon icon-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-linkedin"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <!-- Col End --> */}
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <div className="single-team">
                  <div className="team-img">
                    <img src={myImage16} alt="" />
                  </div>
                  <div className="team-content">
                    <h3 className="xs-title md">ياسمين عبد الحميد</h3>
                    {/* <p>CEO</p>
                    <div className="team-social">
                      <a href="#">
                        <i className="icon icon-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-linkedin"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <!-- Col End --> */}
              <div
                className="col-lg-3 col-sm-6 wow fadeInUp"
                data-wow-duration="1.5s"
              >
                <div className="single-team">
                  <div className="team-img">
                    <img src={myImage17} alt="" />
                  </div>
                  <div className="team-content">
                    <h3 className="xs-title md">خلود احمد</h3>
                    {/* <p>CEO</p>
                    <div className="team-social">
                      <a href="#">
                        <i className="icon icon-facebook"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-twitter"></i>
                      </a>
                      <a href="#">
                        <i className="icon icon-linkedin"></i>
                      </a>
                    </div> */}
                  </div>
                </div>
              </div>
              {/* <!-- Col End --> */}
            </div>
            {/* <!-- Row End --> */}
          </div>
        </section>
      </section>
    </>
  );
};

export default Main;
