export default function(position) {
  return {
    type: 'CHECK_WINNING',
    payload: position
  }
}