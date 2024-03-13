import type { Video } from '@/types/types'

export default function useDetailsHelper() {

    const LABELS = {
        teaser: 'teaser',
        clip: 'clip',
        featurette: 'featurette',
        behind_the_scenes: 'behind the scenes',
        trailer: 'trailer',
    }
    
    function getTrailer(videos: Array <Video> | undefined) {
        return videos?.find( video => {
            return video.type.toLocaleLowerCase() === LABELS.trailer
        })?.key
    }

    return {
        getTrailer
    }
}