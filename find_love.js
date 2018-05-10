class lovetangle {
  constructor(attrs) {
    this.left_x = attrs.left_x
    this.bottom_y = attrs.bottom_y
    this.width = attrs.width
    this.height = attrs.height
  }
}

function get_intersection(lt1, lt2) {
  let ileft_x = (lt1.left_x > lt2.left_x) ? lt1.left_x : lt2.left_x
  let ibottom_y = (lt1.bottom_y > lt2.bottom_y) ? lt1.bottom_y : lt2.bottom_y
  let iw = (lt2.left_x + lt2.width > lt1.left_x + lt1.width) ? (lt1.left_x + lt1.width) - ileft_x : lt2.width
  let ih = (lt2.bottom_y + lt2.height > lt1.bottom_y + lt1.height) ? (lt1.bottom_y + lt1.height) - ibottom_y : lt2.height
  return {left_x: ileft_x, bottom_y: ibottom_y, width: iw, height: ih}
}

function find_overlap(lt1, lt2) {
  if(lt1.left_x >= lt2.left_x + lt2.width || lt1.bottom_y >= lt2.bottom_y + lt2.height) {
    return new lovetangle({left_x: 0, bottom_y: 0, width: 0, height: 0})
  } else {
    let intersection = get_intersection(lt1, lt2)
    return new lovetangle(intersection)
  }
}
