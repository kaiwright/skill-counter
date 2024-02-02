import Button from "react-bootstrap/Button"

function SkillBtn(props) {
    return (
        <Button size="lg" disabled>
            {props.skillName}
        </Button>
    )

}

export default SkillBtn;