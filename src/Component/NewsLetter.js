function NewsLetter() {
    return <div className="newsletter text-light text-center position-relative my-5">
        <img src='/images/Vector1.png' className="position-absolute" style={{ left: 0 }} />
        <span className="fs-bold">Subscribe to get updates on exciting offers <br /> & deals</span><br />

        <div class="input-group mb-3 mail">
            <input type="text" class="form-control border-0 text-light rounded-0" placeholder="Enter your Email" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div class="input-group-append">
                <button class="btn btn-light rounded-0" type="button">Subscribe</button>
            </div>
        </div>
        <img src='/images/Vector.png' className="position-absolute" style={{ right: 0 }} />
    </div>

}

export default NewsLetter;