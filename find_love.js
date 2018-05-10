class lovetangle {
  constructor(lx, by, w, h) {
    this.lx = lx
    this.by = by
    this.width = w
    this.height = h
  }
}

function get_intersection(lt1, lt2) {
  lt1.lx > lt2.lx ? let ilx = lt1.lx : let ilx = lt2.lx
  lt1.by > lt2.by ? let iby = lt1.by : let iby = lt2.by
  lt2.lx + lt2.width > lt1.lx + lt1.width ? let iw = (lt1.lx + w) - ilx : let iw = lt2.width
  lt2.by + lt2.height > lt1.by + lt1.height ? let ih = (lt1.by + h) - iby : let ih = lt2.height

  return [ilx, iby, iw, ih]
}


function find_intersection(lt1, lt2) {
  if(lt1.lx > lt2.lx + lt2.width || lt1.by > lt2.by + lt2.height) {
    return new lovetangle(0, 0, 0, 0)
  } else {
    let intersection = get_intersection(lt1, lt2)
    return new lovetangle(intersection.ilx, intersection.iby, intersection.iw, intersection.ih)
  }
}
