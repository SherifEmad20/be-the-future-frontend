import{Link} from 'react-router-dom'

function EditProduct() {
  return (
    <div className='background-gradiant d-flex'>
      <div className='box-account'>
        <div className='right'>
          <div className="title-part">
            <h2>قدم مشروعك</h2>
            {/* <p>عندنا دائما ستجد ماتريد</p> */}
          </div>
          <form className="account-auth">
            <input placeholder="اسم المشروع" required/>
            <input placeholder="خدمات مشروعك" required/>
            <input placeholder="نوع الخدمات التي يقدمها مشروعك" required/>
            <input placeholder="المدة المطلوب إنجاز العمل بها"required/>

            <label for="vehicle1"> اوافق على الشروط والأحكام </label><br/>
            <input type="checkbox" id="vehicle1" name="vehicle1" value="accept" /> 
            <button className='form-btn' type="submit">ارسال المشروع</button>
            {/* <Link to='/login'>
            <button className='form-btn' type="submit">لدي حساب بالفعل</button>
            </Link> */}
          </form>
        </div>
        <div className='left'>
          <img src="images/logo-account.svg" className="img" />
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
