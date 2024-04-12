const FORMSPARK_FORM_ID = '';

function ContactPage() {
    return (
        <form action={`https://submit-form.com/${FORMSPARK_FORM_ID}`}>
            <input type="text" name="message" />
            <button type="submit">Send</button>
        </form>
    );
}

export default ContactPage;
