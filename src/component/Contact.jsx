const Contact = () => {
    return (
        <div>
            <section id="contact">

                <h2>Contact Me</h2>
                <form>
                    <label>Name</label>
                    <input type="text" name="name" />
                    <label>Email</label>
                    <input type="email" name="email" />
                    <label>Message</label>
                    <textarea name="message"></textarea>
                    <button>Send</button>
                </form>
            </section>
        </div>)
}

export default Contact;