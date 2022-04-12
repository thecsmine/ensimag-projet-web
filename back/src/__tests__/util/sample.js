import { createParagraph, createStory, getToken, updateParagraph } from "./setupDb";

const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum massa sed nunc consequat, sed hendrerit turpis facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras consequat nisi sit amet dui lobortis, et tincidunt dui luctus. Duis semper cursus massa, vitae cursus velit volutpat quis. Nam in porta mauris. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur at elit nec lorem pretium efficitur. In hac habitasse platea dictumst. Morbi mollis sagittis cursus. Maecenas sed scelerisque leo, in cursus ex. Phasellus nec elit a lectus pellentesque aliquet id sit amet enim. Praesent tempus velit eu neque vehicula semper. Nullam pulvinar non elit vel finibus. Cras sit amet tortor ligula. Morbi justo ex, vehicula semper urna eu, ultricies lobortis augue. Nullam erat massa, eleifend sit amet tristique eget, lacinia sit amet lorem. Nullam nec nunc et turpis accumsan ornare ac id nulla. Sed accumsan imperdiet lectus. Aliquam vitae pretium felis. Sed in justo id felis fringilla luctus nec non arcu. Mauris risus purus, aliquet ut luctus vitae, tincidunt vestibulum erat. Vestibulum commodo nibh lectus, vel interdum nisl suscipit et. Cras facilisis cursus mauris, vitae fermentum dui aliquet nec. Suspendisse non nunc sem. Integer elementum ut leo vel luctus. Nullam imperdiet interdum erat finibus vestibulum. Nulla non velit vel lectus ullamcorper condimentum a eget felis. Phasellus eu massa ac nunc commodo varius et ac lacus. Phasellus nisi dui, lacinia vel erat vitae, ultricies aliquam eros. Maecenas at metus sed justo suscipit tincidunt eu sit amet lacus. Morbi vitae tempus tortor. Nullam accumsan venenatis metus, a imperdiet turpis vestibulum sed. In hac habitasse platea dictumst. Morbi finibus dolor nunc, sit amet sagittis justo varius a. Fusce eu tincidunt erat. Nulla rhoncus bibendum nisi, sit amet eleifend elit lacinia nec. Aliquam erat volutpat. Curabitur eget rhoncus elit, ut scelerisque massa. Pellentesque nec arcu facilisis, ullamcorper est vel, pharetra tellus. Morbi dictum dictum tellus, ac luctus arcu lobortis eget. In gravida finibus sapien, et pulvinar lacus ornare quis. Morbi vulputate ultricies metus, nec viverra neque pellentesque at. In vitae tortor vitae diam sodales luctus. Vestibulum ac ipsum magna. Donec eu urna eget risus eleifend ultricies. Ut rhoncus volutpat augue sit amet venenatis. Suspendisse hendrerit rhoncus magna, vel malesuada libero euismod ac. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla fermentum vel est a aliquet. Ut placerat pretium dictum. Duis a quam eu massa consequat imperdiet ut quis justo.";

async function generateSample() {
    const username = "HelloIAmClauzonD"
    const story = await createStory("This is a sample story", username, true, "Hello ! This is a sample paragraph from the sample story. There should be some choices !");
    const choix1 = await createParagraph(story, "Mon premier choix non final :D", username, story.idParagrapheInitial, null, false);
    await updateParagraph(story, choix1.id, `[Choix 1] ${lorem}`, username);
    const choix2 = await createParagraph(story, "Mon deuxième choix non final :D", username, story.idParagrapheInitial, null, false);
    await updateParagraph(story, choix2.id, `[Choix 2] ${lorem}`, username);
    const choix3 = await createParagraph(story, "Mon troisième choix QUI N'EST PAS REDIGE ET NE DEVRAIT PAS APPARAITRE !", username, story.idParagrapheInitial, null, true);
    const choix1_1 = await createParagraph(story, "Mon premier_premier choix final :)", username, choix1.id, null, true);
    await updateParagraph(story, choix1_1.id, `[Choix 1.1] ${lorem}`, username);
    const choix1_2 = await createParagraph(story, "Mon premier_deuxième choix non final :)", username, choix1.id, null, false);
    await updateParagraph(story, choix1_2.id, `[Choix 1.2] ${lorem}`, username);
    const choix1_3 = await createParagraph(story, "Mon premier_troisième choix QUI N'EST PAS REDIGE ET NE DEVRAIT PAS APPARAITRE !", username, choix1.id, null, true);
    const choix2_1 = await createParagraph(story, "Mon deuxième_premier choix final :3", username, choix2.id, null, true);
    await updateParagraph(story, choix2_1.id, `[Choix 2.1] ${lorem}`, username);
    const choix2_2 = await createParagraph(story, "Mon deuxième_deuxième non final :3", username, choix2.id, null, false);
    await updateParagraph(story, choix2_2.id, `[Choix 2.2] ${lorem}`, username);
}

await generateSample();
console.log("Done");