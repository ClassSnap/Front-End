import axiosWithAuth from "../../utils/axiosWithAuth";

export default createBlankRatings = (classId, questionId) => {
    const learnerParents = axiosWithAuth().get(`/api/student/class/${classId}`);
    learnerParents.forEach(parent => 
        axiosWithAuth().post("api/rating",
        {
            questionId: questionId,
            learnerparentId: parent.id,
            classId: classId
        })
        .then(rating => res.status(201).json(rating))
        .catch(error => res.status(500).json(error))
    )
}