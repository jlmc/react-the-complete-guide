import Swal from "sweetalert2";


export function errorAlert(message: string, title: string = 'Oops!') {
    Swal.fire(title, message, 'error')
}

export function successAlert(message: string, title: string = 'Uhul!') {
    Swal.fire(title, message, 'success')
}

export function infoAlert(message: string, title: string) {
    Swal.fire(
        title,
        message,
        'info'
    )
}

export function questionCallbackAlert(props: QuestionCallbackAlertProps) {
    Swal
        .fire({
            title: props.questionTitle,
            text: props.questionTitle,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#09f',
            cancelButtonColor: '#d33',
            confirmButtonText: props.confirmButtonText
        })
        .then((result) => {
            if (result.value) {

                try {
                    props.chain()

                    //successAlert(props.successText, props.successTitle)

                } catch (e) {
                    const message = `Some unexpected Error happens, ${isAnErrorInstance(e)? (e as Error).message : e}`
                    errorAlert(message)
                }

            }
        })
}

function isAnErrorInstance(x: unknown) : boolean {
    return (typeof x === Error.name)
}

export interface QuestionCallbackAlertProps {
    questionTitle: string
    questionText: string
    confirmButtonText: string

    chain: () => void
}
