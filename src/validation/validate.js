const isEmpty = (data) => {
    return (
        data === null ||
        data === undefined ||
        (typeof data === 'object' && Object.keys(data).length < 1) ||
        (typeof data === 'string' && data.trim().length < 1)
    )
}


const validateMemberData = (memberData) => {
    const memberErrors = [{}, {}];
    memberData.forEach((member, index) => {
        if (index <= 1) {
            if (isEmpty(member.name)) {
                memberErrors[index].name = 'Provide name of member!';
            }
            if (isEmpty(member.email)) {
                memberErrors[index].email = 'Provide email of member!';
            }
            if (!member.photo || !member.photoLink) {
                memberErrors[index].photo = 'Provide photo of member!';
            }
        }

    })

    return {
        isMemberDataValid: isEmpty(memberErrors),
        memberErrors
    }

}

const validateApplicationData = (applicationData) => {

    const errors = {};

    if (isEmpty(applicationData.theme)) {
        errors.theme = 'Select one of the theme to continue!';
    }
    if (isEmpty(applicationData.teamName)) {
        errors.teamName = 'You must have team name!';
    }
    if (isEmpty(applicationData.ideaName)) {
        errors.ideaName = 'Please enter the title of your project!';
    }
    if (!applicationData.pdf || !applicationData.pdfLink) {
        errors.pdf = 'You must submit the synopsis of your project!'
    }

    return {
        isValid: isEmpty(errors),
        errors
    }

}

module.exports = {
    validateMemberData,
    validateApplicationData,
}