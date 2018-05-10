class lovetangle {
  constructor(lx, by, w, h) {
    this.lx = lx
    this.by = by
    this.width = w
    this.height = h
  }
}

function get_corners(lt) {
  let btm_left = [lx, by]
  let top_left = [lx, (by + h)]
  let top_right = [(lx + w), (by + h)]
  let btm_right = [(lx + w), by]
  return [ btm_left, top_left, top_right, btm_right ]
}


function find_intersection(lt1, lt2) {

}
