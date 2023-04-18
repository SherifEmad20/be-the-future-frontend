function opinions() {
    return (
      <div className="background-gradiant d-flex">
        <div className="contact-us-page d-flex">
          <div className="title">
            <h2>تواصل معنا</h2>
            <p>يسعدنا تواصلك معنا ونسعد باستقبال اقتراحاتكم</p>
          </div>
          <form className="form-msg">
            <input placeholder="ادخل اسمك" />
            <input placeholder="ادخل بريدك الالكتروني" />
            <textarea id="w3review" name="w3review" rows="4" cols="50" placeholder="ادخل نص الرسالة">
            </textarea>
            <button type="submit" className="form-btn">ارسل الرسالة</button>
          </form>
        </div>
      </div>
    );
  }
  
  export default opinions;
  