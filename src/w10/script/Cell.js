class Cell {
  constructor(x, y, w, h, state) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.state = state;
    this.idx = idx;
    this.friends = [];
  }

  addFriends(cellArray) {
    const idxList = [
      this.idx - colNum - 1,
      this.idx - colNum,
      this.idx - colNum + 1,
      this.idx + 1,
      this.idx + colNum + 1,
      this.idx + colNum,
      this.idx + colNum - 1,
      this.idx - 1,
    ];

    const myCol = this.idx / colNum;
    const myRow = floor(this.idx / colNum);

    if (myCol === 0) {
      idxList[0] = -1;
      idxList[7] = -1;
      idxList[6] = -1;
    } else if (myCol === colNum - 1) {
      idxList[2] = -1;
      idxList[3] = -1;
      idxList[4] = -1;
    }
    if (myRow === 0) {
      idxList[0] = -1;
      idxList[1] = -1;
      idxList[2] = -1;
    } else if (myRow === rowNum - 1) {
      idxList[4] = -1;
      idxList[5] = -1;
      idxList[6] = -1;
    }

    idxList.forEach((eachIdx) => {
      this.friends.push(cells[eachIdx]);
    });
  }

  calcNextState() {
    this.friends.forEach((eachFriend) => {
      if (eachFriend.state) {
        cnt++;
      }
    });

    if (this.state) {
        if(cnt < 2 )
    } else {
      if (cnt === 3) {
        this.state = ture;
      } else {
        this.state = this.state;
      }
    }
  }

  display() {
    push();
    translate(this.x, this.y);
    // if (this.state) {
    //   fill(32);
    // } else {
    //   fill(255);
    // }
    fill(this.state ? 32 : 255);
    rect(0, 0, this.w, this.h);
    pop();
  }
}
