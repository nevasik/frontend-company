import PersonForm from "../../components/person/PersonForm";
import {useEffect} from "react";
import PersonTable from "../../components/person/PersonTable";
import Error from "../../components/Error";
import CommonContainer from '../../components/CommonContainer';
import { Button } from 'react-bootstrap';
import CommonModal from '../../components/CommonModal';
import {useDispatch, useSelector} from 'react-redux';
import { createPerson, fetchPeople, removePerson, updatePerson, toggleModal } from "../../store";
import { editPerson, setError, setPerson } from "../../store/slices/peopleSlice";


function AllPeople() {
    const dispatch = useDispatch()

    const {people, error, loading, person} = useSelector(state => state.people)

    const {modal} = useSelector(state =>  state.form)

    useEffect(() => {dispatch(fetchPeople())}, [dispatch]);
    
    const modalTitle = modal == "edit" ? "Редактировать пользователя" : "Создать пользователя"
   
   return (<>

    <CommonModal title={modalTitle} show={modal !== "off"} setShow={() => dispatch(toggleModal("off"))}>
        {modal === "add" && <PersonForm type="Добавить" form={person} setForm={(v) => dispatch(setPerson(v))} onAction={() => dispatch(createPerson(person))}/>}
        {modal === "edit" && <PersonForm type="Обновить" form={person} setForm={(v) => dispatch(setPerson(v))} onAction={() => dispatch(updatePerson(person))}/>}
    </CommonModal>

    <CommonContainer title="Пользователи">
        {error && <Error onClose={()=> dispatch(setError(null))} title={error.title}> {error.text}</Error>}
                <Button onClick={() => dispatch(editPerson())} variant="secondary" className="m-2">Добавить</Button>
                <PersonTable people={people} onDelete={(id) => dispatch(removePerson(id))} onEdit={(id) => dispatch(editPerson(id))}/>
    </CommonContainer>
    </>)
}

export default AllPeople