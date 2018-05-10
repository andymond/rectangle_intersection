class lovetangle {
  constructor(attrs) {
    this.lx = attrs.left_x
    this.by = attrs.bottom_y
    this.width = attrs.width
    this.height = attrs.height
  }
}

function get_intersection(lt1, lt2) {
  let ilx = (lt1.lx > lt2.lx) ? lt1.lx : lt2.lx
  let iby = (lt1.by > lt2.by) ? lt1.by : lt2.by
  let iw = (lt2.lx + lt2.width > lt1.lx + lt1.width) ? (lt1.lx + lt1.width) - ilx : lt2.width
  let ih = (lt2.by + lt2.height > lt1.by + lt1.height) ? (lt1.by + lt1.height) - iby : lt2.height
  return {left_x: ilx, bottom_y: iby, width: iw, height: ih}
}


function find_overlap(lt1, lt2) {
  if(lt1.lx > lt2.lx + lt2.width || lt1.by > lt2.by + lt2.height) {
    return new lovetangle(0, 0, 0, 0)
  } else {
    let intersection = get_intersection(lt1, lt2)
    return new lovetangle(intersection)
  }
}
