const student = {
    stack: ['HTML'],
    level: 1,
    improveLevel() {
       let levelUp = ['CSS', 'JavaScript', 'React', 'NodeJS']
        if ( this.level < 5) {
            this.stack.push(levelUp[this.level++])
            return this
        } else  
        {
            alert('Студент выучил все технологии!')
        }
    }
};

console.log(student.improveLevel()
                    .improveLevel()
                    .improveLevel()
                    .improveLevel()
                    .improveLevel())
