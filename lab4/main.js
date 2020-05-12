const formName = document.getElementById("name");
const formSurname = document.getElementById("surname");
const formEmail = document.getElementById("email");
const formTelephone = document.getElementById("telephone");
const formComment = document.getElementById("commentText");
const formPhoto = document.getElementById("photo");
let uploadPhoto = false;

function isValid()
{
    const name_pattern = new RegExp('^[A-ZА-Я]+$', 'i');
    const email_pattern = new RegExp('^([A-ZА-Я]|[0-9]|\.|-|_)+@([A-ZА-Я]|[0-9]|\.|-|_)+\.([A-ZА-Я]|[0-9]|\.)+$', 'i');
    const telephone_pattern = /^\+?[78][-\(]?\d{3}\)?-?\d{3}-?\d{2}-?\d{2}$/;


    if (!name_pattern.test(formName.value) || !name_pattern.test(formSurname.value))
    {
        alert('Имя и фамилия могут содержать только буквы.');
        return false;
    }

    if (!email_pattern.test(formEmail.value))
    {
        alert('Некорректно введён e-mail.');
        return false;
    }

    if ((!telephone_pattern.test(formTelephone.value)) && (formTelephone.value !=""))
    {
        alert('Телефон введен некорректно');
        return false;
    }

    if (formPhoto.files.length !== 0)
    {
        if (formPhoto.files[0].type.includes('image/') && formPhoto.files[0].size <= 10 * 1024 * 1024)
        {
            uploadPhoto = true;
        }
        else
        {
            alert('Файл должен быть фотографией и не может иметь размер более чем 10Мб.');
            return false;
        }
    }

    return true;
}

var foldername = "";
function UploadToFirestore()
{
    db.collection('requests').add({
        firstname: formName.value,
        surname: formSurname.value,
        email: formEmail.value,
        telephone: formTelephone.value,
        comment: formComment.value
    })
    .then(function(result) {
        foldername = result.um.path.segments[1];
        let status = document.getElementById("status");
        status.innerHTML = "Данные были успешно отправлены";
        status.style.color = "green";
        status.style.display = "inline";
        
        let metadata = { contentType: 'image/jpeg' };
        let storageRef = firebase.storage().ref();

        if (uploadPhoto)
        {
            storageRef.child(foldername + '/' + formPhoto.files[0].name).put(formPhoto.files[0], metadata)
                .then(function() {
                        console.log("File has been uploaded.");
                })
                .catch(function(error) {
                        console.log("Error: " + error.message);
                });
        }
    })
    .catch(function(error) {
        let status = document.getElementById("status");
        status.innerHTML = "Ошибка отправки данных: " + error;
        status.style.color = "red";
        status.style.display = "inline";
    });
}

function main()
{
    if (isValid())
    {
        UploadToFirestore();
    }
} 
