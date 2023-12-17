import {useEffect} from "react";
import {getPerson} from "../../store";
import {useParams} from "react-router-dom";
import CommonContainer from "../../components/CommonContainer";
import { Image } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

function OnePerson() {
    const {id} = useParams()
    const dispatch = useDispatch()

    const {person, loading, error} = useSelector(state => state.people)

    useEffect(() => { dispatch(getPerson(id))}, [dispatch]);

    return person &&
     <CommonContainer title={`О пользователе:  ${person.firstName} ${person.secondName} ${person.lastName}`}>
         <Image className="m-1" src={person.avatar} fluid />
    </CommonContainer> 
}
export default OnePerson;