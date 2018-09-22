import { firstPossibleGroup } from 'engine/possible-groups'
// import predicate from 'engine/experimental/predicate'

addEventListener('message', e => {
  const {
    messageId,
    data: {
      pots,
      groups,
      selectedTeam,
      currentPotNum,
    },
  } = e.data

  // const pickedGroup = firstPossibleGroup(pots, groups, selectedTeam, currentPotNum, predicate)
  const pickedGroup = firstPossibleGroup(pots, groups, selectedTeam, currentPotNum)

  postMessage({
    messageId,
    data: {
      pickedGroup,
    },
  })
})
