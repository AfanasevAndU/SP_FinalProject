import { BMW, Chevrolet, Honda, Kia, Subaru } from "../../shared/assets";
import { GridContainer } from "../../shared/ui/gridContainer";
import { PageContent } from "../../shared/ui/pageContent/pageContent";
import { Sidebar } from "../../shared/ui/sidebar";

const MainPage = () => {
  const gridContent = [BMW, Chevrolet, Honda, Kia, Subaru];

  return (
    <PageContent>
      <Sidebar></Sidebar>
      <GridContainer gridContent={gridContent}></GridContainer>
    </PageContent>
  );
};

export default MainPage;
