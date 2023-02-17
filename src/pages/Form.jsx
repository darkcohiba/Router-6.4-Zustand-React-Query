import useFormStore from '../hooks/formStore'


function Form() {

    const { form, addForm } = useFormStore()

    console.log(form)

    return (
        <div>
            <form onSubmit={(e)=>{
                e.preventDefault();
                // console.log(e.target.meat.name)
                addForm(e.target.meat.name, e.target.meat.value)
            }}>
                <input type="text" name="meat"></input>
            </form>
            

        </div>
    );
}

export default Form;