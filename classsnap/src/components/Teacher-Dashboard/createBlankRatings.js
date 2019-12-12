import axiosWithAuth from "../../utils/axiosWithAuth";

const createBlankRatings = (classId, questionId) => {
    const learnerParents = axiosWithAuth().get(`/api/student/class/${classId}`);
    learnerParents.forEach(parent => 
        axiosWithAuth().post("api/rating",
        {
            questionId: questionId,
            learnerparentId: parent.id,
            classId: classId
        })
    )
}

export default createBlankRatings;