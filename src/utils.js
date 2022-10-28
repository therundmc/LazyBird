
function isCollision(object1x, object1y, object2x, object2y, object2w, object2h)
{
    if ((object1x > object2x - object2w) && (object1x < object2x + object2w)) {
        if ((object1y > object2y - object2h) && (object1y < object2y + object2h)) {
            return true;
        }
    }
    return false;
}